FROM centos

RUN yum install -y java-1.8.0-openjdk.x86_64
RUN cp /etc/profile /etc/profile_backup && \
    echo 'export JAVA_HOME=/usr/lib/jvm/jre-1.8.0-openjdk' | tee -a /etc/profile && \
    echo 'export JRE_HOME=/usr/lib/jvm/jre' | tee -a /etc/profile && \
    source /etc/profile && \
    echo $JAVA_HOME && \
    echo $JRE_HOME && \
    java -version

RUN yum install -y wget
RUN cd ~ && \
    wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo && \
    rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key && \
    yum install -y jenkins

RUN yum -y install initscripts && \
    yum clean all

RUN yum -y install git && \
    git --version

RUN yum install -y epel-release && \
    yum install -y nodejs && \
    echo Nodejs Version: `node -v`
    
RUN su - jenkins -s /bin/sh -c "mkdir /var/lib/jenkins/.ssh && echo -e 'y\n' | ssh-keygen -t rsa -P '' -f .ssh/id_rsa" && \
    echo '' && \
    cat /var/lib/jenkins/.ssh/id_rsa && \
    echo '' && \
    cat /var/lib/jenkins/.ssh/id_rsa.pub && \
    echo ''

ENTRYPOINT service jenkins start && /bin/bash

EXPOSE 8080
