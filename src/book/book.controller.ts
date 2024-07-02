// import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// import { BookService } from './book.service';
// import { Book } from './schemas/book.schema';
// import { CreateBookDTO } from './dto/create-book.dto';
// import { UpdateBookDTO } from './dto/update-book.dto';

// @Controller('books')
// export class BookController {
//     constructor(private bookService: BookService) { }

//     @Get()
//     async getAllBooks(): Promise<Book[]> {
//         return this.bookService.findAll();
//     }

//     @Post()
//     async createBook(
//         @Body()
//         book: CreateBookDTO,
//     ): Promise<Book> {
//         return this.bookService.create(book)
//     }

//     @Get(':id')
//     async getBook(
//         @Param('id')
//         id: string,
//     ): Promise<Book> {
//         return this.bookService.findById(id);
//     }

//     @Post(':id')
//     async updateBook(
//         @Param('id')
//         id: string,
//         @Body()
//         book: UpdateBookDTO,
//     ): Promise<Book> {
//         return this.bookService.upadateById(id, book)
//     }

// }
