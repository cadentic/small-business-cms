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

Route::get('/admin/formA','LandingPages@gotoFormA');
Route::post('/admin/formA','LandingPages@formPost');

Route::get('/admin/innerForm','LandingPages@innerForm');
Route::post('/admin/innerForm','LandingPages@innerPost');

Route::get('/admin/innerForm2','LandingPages@innerForm2');
Route::post('/admin/innerForm2','LandingPages@innerPost2');

Route::get('/admin/innerForm3','LandingPages@innerForm3');
Route::post('/admin/innerForm3','LandingPages@innerPost3');

Route::get('/admin/innerForm4','LandingPages@innerForm4');
Route::post('/admin/innerForm4','LandingPages@innerPost4');

Route::get('/admin/innerFormBlank','LandingPages@innerFormBlank');
Route::post('/admin/innerFormBlank','LandingPages@innerPostBlank');

Route::get('/admin/innerFormBlank1','LandingPages@innerFormBlank1');
Route::post('/admin/innerFormBlank1','LandingPages@innerPostBlank1');

Route::get('/admin/{any}', 'IndexController@gotoAdmin')->where('any', '.*');


Route::get('/employeeregistration', 'IndexController@gotoLoginOne');
Route::get('/businessproject', 'IndexController@gotoLoginTwo');
Route::get('/businessregistration', 'IndexController@gotoLoginThree');
Route::post('/employeeregistration', 'IndexController@postLoginOne');
Route::post('/businessregistration', 'IndexController@postLoginThree');
Route::post('/businessproject', 'IndexController@postLoginTwo');
Route::post('/sendotp', 'IndexController@sendOtp');
Route::post('/validateotp', 'IndexController@validateOtp');
Route::post('/sendemail', 'MailController@sendEmail');
Route::post('/validateemail', 'MailController@validateEmail');
//Route::view('/agreement', 'agreement');
Route::get('/employeeproject', 'IndexController@gotoLoginFour');
Route::post('/employeeproject', 'IndexController@postLoginFour');

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
Route::get('/whatsapp', 'WhatsappNotificationsController@index');

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
Route::post('contact/{ticket_id}', 'ContactUsController@update');
Route::get('forgot-password', 'PasswordController@renew');
Route::post('forgot-password', 'PasswordController@RenewPost');
Route::get('download', 'DownloadResourcesController@index');
Route::get('contact-us', 'ContactUsController@create');
Route::post('contact-us', 'ContactUsController@createPost');
Route::post('save-to-json', 'ContactUsController@save_to_json');


Route::get('transaction-history','TransactionHistoryController@getHistory');

Route::post('save-json/{file}', 'SaveFormDataController@save');
Route::get('/businessregistration/validate/{id}', 'IndexController@validateBusiness');
Route::get('/employeeregistration/validate/{id}', 'IndexController@validateEmployee');
Route::get('/businessregistration/show/{id}', 'IndexController@showBusiness');
Route::get('/employeeregistration/show/{id}', 'IndexController@showEmployee');
Route::view('/login', 'login');
Route::post('/login', 'IndexController@login');
//Route::get('pdfview', 'IndexController@pdf');
Route::get('/logout', 'IndexController@logout');
Route::get('/employee', 'IndexController@gotoEmployee');
Route::get('/createinvoice', 'InvoiceController@create');
Route::get('/allinvoices', 'InvoiceController@showAll');
