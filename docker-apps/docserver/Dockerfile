FROM centos:6

MAINTAINER Zhange Yue <zygeilit@icloud.com>

RUN yum install -y epel-release && \
    yum install -y nodejs && \
    echo Nodejs Version: `node -v`

RUN yum -y install git && \
    git --version

RUN yum -y install vim

RUN touch /etc/yum.repos.d/mongodb-org-3.4.repo && \
    echo "[mongodb-org-3.4]" >> /etc/yum.repos.d/mongodb-org-3.4.repo && \
    echo "name=MongoDB 3.4 Repository" >> /etc/yum.repos.d/mongodb-org-3.4.repo && \
    echo "baseurl=https://repo.mongodb.org/yum/redhat/\$releasever/mongodb-org/3.4/x86_64/" >> /etc/yum.repos.d/mongodb-org-3.4.repo && \
    echo "gpgcheck=0" >> /etc/yum.repos.d/mongodb-org-3.4.repo && \
    echo "enabled=1" >> /etc/yum.repos.d/mongodb-org-3.4.repo

RUN yum install -y mongodb-org

RUN yum -y install initscripts && \
    yum clean all

RUN yum -y install npm

RUN npm install express-generator -g && \
    cd /var/ && \
    express spb-document-server && \
    cd spb-document-server && \
    npm install express morgan cookie-parser body-parser debug serve-favicon -save

ENTRYPOINT service mongod start && /bin/bash
