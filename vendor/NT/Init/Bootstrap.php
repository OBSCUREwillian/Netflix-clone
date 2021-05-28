<?php
namespace NT\Init;

abstract class Bootstrap{

    abstract protected function initRoutes();

    // variavel que ira receber o array de rotas
    private $routes;


    // Construct que inicia as funcoes contidas nele na instancia de sua classe
    public function __construct(){
        $this->initRoutes();
        $this->run($this->getUrl());
    }


    // Setando $routes com array das rotas passadas como parametro
    public function setRoutes(array $routes){
        $this->routes = $routes;
    }


    // Pegar o array que esta armazenado em $routes
    public function getRoutes(){
        return $this->routes;
    }


    // Funcao que pega a uri que esta sendo acessada e retorna somente o path da uri
    protected function getUrl(){
        return parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    }


    //Funcao chamada na instancia dessa classe 
    //Funcao que recebe como parametro o path da uri
    protected function run($url){

        // Percorrendo o array que esta na variavel $routes e pegando cada rota
        foreach($this->getRoutes() as $key => $route){
            
            // Se a $url passada como parametro for igual a rota faça
            if($url === $route['route']){

                //Variavel que guarda dinamicamente o diretorio dos controllers
                $class = "App\\Controllers\\" . ucfirst($route['controller']);

                
                //Instancia da classe armazenada em $class
                //EX:         new App\Controllers\IndexController 
                $controller = new $class;


                //Variavel que guarda o nome da acao a ser executada
                $action = $route['action'];


                // Instancia da classe executando a acao guardada em $action
                $controller->$action();
            }
        }
    }

}

?>