<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', 'IndexController@index');

Route::get('/admin', 'IndexController@gotoAdmin');

Route::get('/admin/{any}', 'IndexController@gotoAdmin')->where('any', '.*');


Route::get('/login_one', 'IndexController@gotoLoginOne');
Route::get('/login_two', 'IndexController@gotoLoginTwo');
Route::get('/login_three', 'IndexController@gotoLoginThree');
Route::post('/login_one', 'IndexController@postLoginOne');
Route::post('/login_three', 'IndexController@postLoginThree');
Route::post('/login_two', 'IndexController@postLoginTwo');
Route::post('/sendotp', 'IndexController@sendOtp');
Route::post('/validateotp', 'IndexController@validateOtp');
Route::post('/sendemail', 'MailController@sendEmail');
Route::post('/validateemail', 'MailController@validateEmail');
Route::view('/login_one/agreement', 'agreement');


Route::get('/client_main', 'IndexController@gotoMain');
Route::get('/client_inner', 'IndexController@gotoInner');
Route::get('/client_inner2', 'IndexController@gotoInner2');
Route::get('/client_inner3', 'IndexController@gotoInner3');
Route::get('/client_inner4', 'IndexController@gotoInner4');

Route::get('/client_innerblank', 'IndexController@gotoInnerblank');
Route::get('/client_innerblank2', 'IndexController@gotoInnerblank2');



Route::get('/import_menu', 'IndexController@import_menu');
Route::post('/export_menu', 'IndexController@export_menu');

Route::get('/import_client_main', 'IndexController@import_client_main');


# Additional menu
Route::get('whatsapp', 'WhatsappNotificationsController@index');

Route::get('/enquiry','EnquiryController@index');
Route::post('/enquiry','EnquiryController@post');
Route::get('/products/all','AdminController@getProducts');
Route::post('/product/add','AdminController@addProduct');
Route::post('/invoice/create','InvoiceController@invoiceCreate');
Route::get('/invoices/all','AdminController@getInvoices');
//end

Route::get('searchfaq', 'SearchQuestionsController@index');
Route::get('contact', 'ContactUsController@index');
Route::get('contact/{ticket_id}', 'ContactUsController@show');
Route::get('forgot-password', 'PasswordController@renew');
Route::get('download', 'DownloadResourcesController@index');
Route::get('contact-us', 'ContactUsController@create');


Route::get('transaction-history','TransactionHistoryController@getHistory');

Route::post('save-json/{file}', 'SaveFormDataController@save');
