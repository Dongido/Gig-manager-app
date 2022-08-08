<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gig extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'role_id',
        'country',
        'state',
        'address',
        'tags',
        'minimum_salary',
        'maximum_salary'
    ];
}
