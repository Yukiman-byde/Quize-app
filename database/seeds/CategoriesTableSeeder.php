<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert(
            ['name' => '表現',
             'sub_name' => 'expression',
             'picture' => 'https://cdn.pixabay.com/photo/2020/01/22/09/39/teacher-4784916_960_720.jpg ',
             ],
            );
    }
}
