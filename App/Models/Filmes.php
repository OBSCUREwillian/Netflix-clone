<?php

namespace App\Models;
use NT\Model\Model;

class Filmes extends Model{

    public function getFilmes(){
        $query = 'SELECT imagem_filme FROM somente_filmes';
        return $this->db->query($query)->fetchAll();
    }
}

?>