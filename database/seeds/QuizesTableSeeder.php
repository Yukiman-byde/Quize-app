<?php

use Illuminate\Database\Seeder;

class QuizesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('quizes')->insert(
            [
            'id' => 1,
            'question' => '東京都の感染者数何人でしたか',
            'answear' => 3,
            'choice1' => '5543人',
            'choice2' => '534人',
            'choice3' => '5534人',
            ]);
    }
}
