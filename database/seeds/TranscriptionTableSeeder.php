<?php

use Illuminate\Database\Seeder;

class TranscriptionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('transcriptions')->insert(
            [
             'transcription' => 'Nothing',
             'tip' => '・Nothing'
            ],
            );
    }
}
