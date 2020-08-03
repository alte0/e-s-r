const Method = {
    GET: `GET`,
    POST: `POST`,
    PUT: `PUT`,
    PATCH: `PATCH`,
    DELETE: `DELETE`
};

class ApiHeroku {
    constructor() {
        this._baseUrl = "http://emphasoft-test-assignment.herokuapp.com";
    }

    _fetchRequest = async ({
        url,
        method = Method.GET,
        body = null,
        headersAppend = null
        }) => {

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        if (headersAppend) {
            for (const [key, value] of Object.entries(headersAppend)) {
                headers.append(`${key}`, `${value}`);
            }
        }

        const response = await fetch(`${this._baseUrl}/${url}`, { method, body, headers });

        if (response.ok) {
            return await response.json();
        } else {
            alert("Ошибка: " + response.status);
        }
    }

    getTokenAndAuth(jsonData) {
        return this._fetchRequest({ url: "api-token-auth/", method: Method.POST, body: jsonData});
    }

    getAllUsers(headersAppend) {
        return this._fetchRequest({ url: "api/v1/users/", headersAppend });
    }

    createUser(jsonData, headersAppend) {
        return this._fetchRequest({ url: "api/v1/users/", method: Method.POST, body: jsonData, headersAppend });
    }

    updateUser(jsonData, id, headersAppend) {
        return this._fetchRequest({ url: `api/v1/users/${id}/`, method: Method.PATCH, body: jsonData, headersAppend });
    }
}

export const api = new ApiHeroku();
