<?php

use Illuminate\Database\Seeder;

class DisplaysTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('displays')->insert(
            [
            'name' => 'How to write hiragana',
            'description' => 'We are going to learn how to write hiragana correctly, from　あ to こ',
            'video' => 'https://www.youtube.com/watch?v=r25L_JwPSJc',
            'thumbnail' => 'https://i.ytimg.com/vi/r25L_JwPSJc/mqdefault.jpg',
            'transcription_id' => 5,
            'category_id' => 4,
            ]);
    }
}
