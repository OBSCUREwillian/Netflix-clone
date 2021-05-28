<?php 
namespace App;

use NT\Init\Bootstrap;

class Route extends Bootstrap{

    //Funcao chamada na instancia dessa classe 
    protected function initRoutes(){
        // Rotas
        $routes['home'] = array(
            'route' => '/',
            'controller' => 'indexController',
            'action' => 'index'
        );

        $routes['sobre_nos'] = array(
            'route' => '/sobre_nos',
            'controller' => 'indexController',
            'action' => 'sobreNos'
        );

        // Passando as rotas acima como parametro para setar a variavel $routes
        $this->setRoutes($routes);
    }

}

?>