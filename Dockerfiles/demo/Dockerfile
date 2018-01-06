FROM centos
LABEL express project used for test dockerfile
MAINTAINER zhangyue "zygeilit@icloud.com"
RUN yum install -y epel-release
RUN yum install -y nodejs
RUN echo Nodejs Version: `node -v`
RUN npm install express-generator -g
RUN mkdir ~/projects && \
    cd ~/projects && \
    express demo && \
    cd demo && \
    npm install express morgan cookie-parser body-parser debug serve-favicon -save
EXPOSE 3000
ENTRYPOINT ["node ~/projects/demo/bin/www"]
CMD []
