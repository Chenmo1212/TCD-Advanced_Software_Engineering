# Databases

## User

- user_id
- user_name
- password
- email
- avatar
  - URL
- phone
- create_time
- is_delete
  - block



## func

- log_in()
- sign_up(username, pwd, email, phone)

## User profile 

- user_id
- gender
- birth_date
- desc
  - (100)
- nationality

## Book

- book_id
- book_name
- book_url
  - file -> pdf
- thumbnail
  - url
- author
- category
- font_amount
  - isNull
- desc
- ISBN
- language
- status
- upload_time
- read_amount
- comment_amount
- recommended_amount
  - like + 1
  - dislike - 1 
- is_delete

## Book_reservation

- user_id
- book_id
- create_time
- return_time
- start_time
- end_time
- is_delete

## Comment_list

- comment_id
- user_id
- book_id
- content
- comment_page
- create_time
- update_time
- delete_time
- is_delete

## Reading_room

- room_id
- room_name
- room_capacity
- reader_amount
- is_delete

## Seat

- room_id
- seat_id
- is_available
- is_delete

## Seat_reservation

- reservation_id
- user_id
- seat_id
- start_time
- end_time
- is_delete

## User_Environment_Config

- user_id
- environment_id
- is_cat

## Message

- user_id
- content
- create_time
- receiver_id
  - isNull
- gesture_id
- message_type
  - noticeboard
- is_delete



![image-20230316145729811](Databases.assets/image-20230316145729811.png)
