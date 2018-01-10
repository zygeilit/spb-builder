docker build jenkins -t "jenkins-service-image"
docker run -it -p 5001:8080 --volume ..?/Dockerfiles/jenkins/resources:/opt/volume-resources --name jenkins-service jenkins-service-image