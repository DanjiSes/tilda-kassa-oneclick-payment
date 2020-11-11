![гифка](src/demo.gif?raw=true)

### Сначала установите http-server

```
npm install --global http-server
```

### Добавьте в файл hosts

```
127.0.0.1 dev.tilda.local
```

### Запустите сервер из корневой дериктории репо

```
http-server ./src -p 3000
```

Теперь вы можете добавлять в свой тильдасайт скрипты

```
<script src="http://dev.tilda.local:3000/script-name.js"></script>
```