1、kibana-5.1.1\src\core_plugins下的内容的访问
访问kibana-5.1.1\src\core_plugins下 public的文件夹里的内容时，要忽略该文件夹名，跳过该文件夹名。
比如：
访问如下 kibana-5.1.1\src\core_plugins\kibana\public\management\sections\indices内容，访问路径写法如下：
$translatePartialLoader.addPart('../plugins/kibana/management/sections/indices');
 
2、重新优化optimizer kibana
1) 关掉kibana
2) 清空 /home/ELK/kibana-5.1.1 主目录里的optimize 文件夹内容
3) 启动kibana，kibana发现 主目录里optimize文件夹内容为空，自动进行optimize。

在Unix目录下解压所有zip文件  
for z in *.zip; do unzip $z ; done;   

https://angular-translate.github.io/docs/#/guide/05_using-translate-directive

调试模式
bin\kibana.bat --dev --hostname=localhost --no-ssl