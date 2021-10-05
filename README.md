# RESTful API

```json
let users = [
    {
        "id": 1,
        "name": "Lion",
    },
    {
        "id": 2,
        "name": "Tiger",
    }

]
```      
|Routes                |       Request Method         |          Description|
| -----------          | -----------                  | --------            |
| /user                |        POST                  |   Create a new user |
| /user                |        GET                   |   Get All user       |
| /user/:id            |        PUT/PATCH             |   Update user by given unique ID       |
| /user/:id            |        GET                   |   Get user by given unique ID       |
| /user/:id            |        DELETE                |   Delete user by given unique ID       |