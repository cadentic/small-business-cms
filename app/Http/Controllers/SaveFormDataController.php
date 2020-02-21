<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SaveFormDataController extends Controller
{
    private $writableFiles = [
        'personnalization'
    ];

    public function save($file, Request $request)
    {
        if (!in_array($file, $this->writableFiles))
            abort(403, "File {$file} is not writable!");
        $file = public_path("json/{$file}.json");
        file_put_contents($file, $request->getContent());
    }
}
