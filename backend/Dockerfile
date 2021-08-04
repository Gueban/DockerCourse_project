#FROM python:3.9-alpine
FROM python:latest
WORKDIR /backend
#RUN apk add --no-cache gcc musl-dev linux-headers
ENV FLASK_APP=server.py
COPY Requirements.txt Requirements.txt
RUN pip install -r Requirements.txt
COPY . .
CMD ["python", "server.py"]