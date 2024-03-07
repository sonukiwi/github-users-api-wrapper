# github-users-api-wrapper

This NPM package functions as a wrapper to public Github users api.

### Sample Usage

```javascript
// Require/Import package
const githubUsersAPI = require("@mohammadsonu2004/github-users-api-wrapper");

/*
The package exposes two methods :
1. get_top_users
2. get_single_user
*/

// get_top_users() Usage
async function test1() {
  const response = await githubUsersAPI.get_top_users();
  // response is of type { data: SOME_VALUE | null, error: SOME_VALUE | null }
  // If call is successful:
  // data contains response and error is null
  // If call is unsuccessful:
  // data contains null and error contains error

  if (response.error) {
    // Some error occurred
    // Get exact error by reading response.error
  } else {
    // Successful response
    // Get response by reading response.data
  }
}

// get_single_user() Usage
async function test2() {
  // Pass userName as parameter to get_single_user function
  const response = await githubUsersAPI.get_single_user("mojombo");
  // response is of type { data: SOME_VALUE | null, error: SOME_VALUE | null }
  // If call is successful:
  // data contains response and error is null
  // If call is unsuccessful:
  // data contains null and error contains error

  if (response.error) {
    // Some error occurred
    // Get exact error by reading response.error
  } else {
    // Successful response
    // Get response by reading response.data
  }
}
```
