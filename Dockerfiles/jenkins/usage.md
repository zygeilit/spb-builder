### 使用jenkins dockerfile搭建jenkins服务器

* 安装docker
* docker build ..?/Dockerfiles/jenkins -t "jenkins-service-image"
* docker run -it -p 5001:8080 --name jenkins-service jenkins-service-image

### 知识
> https://mohitgoyal.co/2017/02/27/configuring-ssh-authentication-between-github-and-jenkins/
