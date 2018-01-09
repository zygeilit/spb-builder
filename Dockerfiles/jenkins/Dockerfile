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

ENTRYPOINT ["su - jenkins -s /bin/sh && \
            ssh-keygen -t rsa -P '' -f ~/ && \
            cd ~/.ssh/ && cat id_rsa && \
            cat id_rsa.pub && exit"]

EXPOSE 8080
