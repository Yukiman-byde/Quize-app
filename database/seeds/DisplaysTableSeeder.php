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
            'description' => 'We are going to learn how to write hiragana correctly, from　あ to お',
            'video' => 'https://youtu.be/r25L_JwPSJc',
            'thumbnail' => 'https://i.ytimg.com/vi/r25L_JwPSJc/mqdefault.jpg',
            'quize_id' => '3',
            'category_id' => '4',
            ]);
    }
}
