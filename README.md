# iOStock-API
An API for authenticating users, registering and listing products and registering and listing inventory movements. Developed in NodeJS.

# Instalação:

É importante que ao receber a aplicação execute o comando "npm i" para instalar todas as dependências do projeto listadas no arquivo package.json.

A execução deste comando é necessaria tanto na pasta iOStock, quanto na pasta StockAPI, para que ambas tenham todas as bibliotecas instaladas.

Para que o banco de dados funcione normalmente, é importante que se sigam os seguintes passos:

1 - Crie um banco de dados MySQL em sua máquina com o nome "io_stock".

2 - Entre no diretório "src" e na pasta "database", com isso, encontrará um arquivo chamado db.js.

3 - Na linha 3 do arquivo, substitua as palavras "root", pelo seu usuario do MySQL e os números "1117" por sua senha do MySQL.

4 - Agora acesse a pasta "models" do diretório "src".

5 - Acesse os arquivos "Product.js", "StockMove.js" e "User.js".

6 - Nestes arquivos você encontra-ra uma linha comentada como essa: "//Product.sync({force: true});"  , é importante que na primeira execução do programa essa linha seja 
descomentada para que ela crie a tabela correspondente em seu banco de dados. Após a primeira execução do programa, a linha deve 
ser comentada para que não seja executada outra vez, caso contrário, o banco de dados irá recriar todas as tabelas a cada execução! 
Lembrando que essas linhas de código que executam esse comando se encontram em todos os arquivos da pasta "models" e é importante 
que este passo seja concluido em todos estes arquivos.

7 - Com isso o banco de dados estará pronto para uso e em perfeito funcionamento.

# Execução

Para iniciar a API, basta rodar o comando "yarn dev".

![StockAPI](https://user-images.githubusercontent.com/68878604/100753642-d7af5580-33c8-11eb-88bb-b33f1a3a73ae.PNG)
