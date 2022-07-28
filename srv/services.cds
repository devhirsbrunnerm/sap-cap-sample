using { db } from '../db/schema';

namespace srv;

service BooksService {

    entity Books as projection on db.Books;

    entity Authors as projection on db.Authors;

}