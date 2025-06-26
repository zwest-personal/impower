AWS_PROFILE=impower

.PHONY: dev
dev: login build push-dev

.PHONY: impower
impower:
	docker-compose -f docker-compose.local.yml up --build

.PHONY: login
login:
	aws ecr get-login-password --profile impower --region us-east-1 | docker login --username AWS --password-stdin 030015548744.dkr.ecr.us-east-1.amazonaws.com

build:
	docker-compose -f docker-compose.dev.yml build

push-dev:
	docker-compose -f docker-compose.dev.yml push


# .PHONY: test
# test:
#     docker-compose -f docker-compose-test.yml up --build