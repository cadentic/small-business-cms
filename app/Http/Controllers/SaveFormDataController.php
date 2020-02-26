<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SaveFormDataController extends Controller
{
    private $writableFiles = [
        'personnalization',
        'tab12-search',
        'theme-data',
        'theme-colors',
        'main-topbar-search',
        'login'
    ];

    public function save($file, Request $request)
    {
        if (!in_array($file, $this->writableFiles))
            abort(403, "File {$file} is not writable!");
        $file = public_path("json/{$file}.json");
        file_put_contents($file, $request->getContent());
    }
}
