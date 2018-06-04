import { ajax } from 'rxjs/observable/dom/ajax';
import { ofType } from 'redux-observable';
import { catchError, mergeMap, map } from 'rxjs/operators';
import RSA from 'react-simple-auth';
import { REQUEST_USER_REPOS_START } from '../actions/actionTypes';

import { doUserReposFulfilled, doUserReposFailed } from '../actions/doUserRepos';
import {linse} from "../providers/linse";
import {token} from "../../store";

// Also now using v6 pipe operators
const fetchUserRepos = (action$, state$) =>
	action$.pipe(
		ofType(REQUEST_USER_REPOS_START),
		mergeMap(action => {
			let apiUrl = `http:localhost:8000/api/users`;
			let token = token();
			return ajax
				.getJSON(apiUrl)
				.pipe(
					map(response => doUserReposFulfilled(response)),
					catchError(error => doUserReposFailed(error.xhr.response))
				);
		})
	);

export default fetchUserRepos;
