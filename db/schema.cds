using { cuid } from '@sap/cds/common';

namespace db;

entity Authors : cuid {
    Name : String;
    Books : Association to many Books on Books.Author = $self;
}

entity Books : cuid {
    Title : String;
    Description : String;
    Author : Association to one Authors;
}