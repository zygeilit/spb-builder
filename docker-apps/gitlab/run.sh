docker run --detach \
    --hostname gitlab.example.com \
    --publish 443:443 --publish 80:80 --publish 22:22 \
    --expose=80 \
    --name gitlab \
    --restart always \
    --volume /Users/zhangyue/DockerServices/gitlab/config:/etc/gitlab \
    --volume /Users/zhangyue/DockerServices/gitlab/logs:/var/log/gitlab \
    --volume /Users/zhangyue/DockerServices/gitlab/data:/var/opt/gitlab \
    gitlab/gitlab-ce
