<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Company;
use App\Models\Role;

class Gig extends Model
{
    use HasFactory;
    protected $table='gigs';

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

    public function company(){
        return $this->belongsTo(Company::class);
    }

    public function role(){
        return $this->belongsTo(Role::class);
    }
}
