sudo docker run --detach \
    --hostname gitlab.example.com \
    --publish 127.0.0.1:443:443 --publish 127.0.0.1:80:80 --publish 127.0.0.1:22:22 \
    --name gitlab \
    --restart always \
    --volume /Users/zhangyue/DockerServices/gitlab/config:/etc/gitlab \
    --volume /Users/zhangyue/DockerServices/gitlab/logs:/var/log/gitlab \
    --volume /Users/zhangyue/DockerServices/gitlab/data:/var/opt/gitlab \
    gitlab/gitlab-ce:latest
