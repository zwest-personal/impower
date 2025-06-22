.PHONY: impower
impower:
	docker-compose -f docker-compose.local.yml up --build

# .PHONY: test
# test:
#     docker-compose -f docker-compose-test.yml up --build