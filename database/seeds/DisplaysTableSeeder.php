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
            'name' => '日本語レッスン✍JLPT N5 Lesson 1-1 Conversation「わたしはがくせいです」 I am a student.【日本語能力試験N5】',
            'description' => '日本語能力試験 日本語eラーニング JLPT対策',
            'video' => 'https://www.youtube.com/embed/u1g1hWLZ67I',
            'thumbnail' => 'https://i.ytimg.com/vi/u1g1hWLZ67I/sddefault.jpg',
            'transcription_id' => 10,
            'category_id' => 8,
            ]);
    }
}
