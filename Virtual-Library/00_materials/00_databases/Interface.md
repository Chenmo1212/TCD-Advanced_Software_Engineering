# Interface



## Interface

- book/recommend
  - response <list > obj >
    - book-id
- book/get
  - body
    - book-id (str)
  - response<obj>
    - book-detail

- book/categories**(removed)**
  - response <list>
- book/categories/get

  - response<list>

- book/list
  - response <list -> obj>
- book/get-file
  - body
    - book-id
  - response
    - file(url => str)
- rent/book/add
  - body
    - book-id
  - response
    - status => success or fail
- rent/book/update => (update/delete)
  - body
    - book-id
  - response
    - status => success or fail

- room/list

  - response<list>

    - room -> seat

      ```json
      {
          "room_id": "xxxxxxx",
          "seatList": [{
              "seat_id": "xxx",
              ...
          }],
          "total_seat_amount": 30,
          "total_rest_amount": 20,
          ...
      }
      ```

- rent/seat/add

  - body
    - room-id
    - seat-id

  - response
    - status => success or fail

- rent/seat/update => (update/delete)

  - body
    - book-id
  - response
    - status => success or fail

- book/search

  - body

    - search-content

  - response <list>

    ```json
    {
        "book_id": "xxxx",
        "desc": "xxxxx",
        "name": "xxxx",
        "thumbnail": "xxxx"
    }
    ```

- user/login

  - body
    - email
    - pwd
  - response <obj>
    - user-detail
    - book-list
    - seat-info

- user/signup

  - body
    - username
    - email
    - pwd
  - response
    - status => success or fail

- user/model

  - body
    - user-id
  - response <str>

- model/list

  - response <list - string>

## Interface Name: Book

Interface acquisition method: URL: book/get/

Interface status: Not completed

### Response:

```json
{
    "book_id": 1231232  // can not be null, generate automatically when adding a new book
    "book_Name": "test"// Can not be null 
    "Book_url"   "https://xxx"
    "thumbnail" :// 
}
```


| Field Name | Field Type | Null or not | Default value | Description |
|--|--|--|--|--|
| Book_id | Char | N |  | Generate by Chart|
|Book_Name|String|N| |History of Roma|
|thumbnail|String|Y|| URL |


## Interface Name: Book detail

Interface Acquisition Method: URL: book/ thumbnail/

Interface Status: Not Completed

Apply

```
{
	"book_id": // click on the book thumbnail
	"book_name"
}
```





