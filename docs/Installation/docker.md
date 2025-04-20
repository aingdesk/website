# 使用 Docker 部署 AingDesk 服务端

## 操作场景

本文将指导您如何使用 Docker 部署 AingDesk 服务端。

## 前提条件

- 已安装 Docker 和 Docker Compose。
- 当前仅支持 amd64 和 arm64 架构的操作系统。
- 需在服务器上开放 7071 端口。

## 操作步骤
### Docker Compose

- 复制下方命令，使用 Docker Compose 部署镜像。

```bash
mkdir -p aingdesk
cd aingdesk
wget https://cnb.cool/aingdesk/AingDesk/-/git/raw/server/docker-compose.yml
# 新版 Docker 请运行以下命令
docker compose up -d
# 旧版 Docker 请运行以下命令
docker-compose up -d
```

### Docker Run

- 复制下方命令，映射指定端口部署镜像。

```bash
docker run -d \
  --name node \
  -v $(pwd)/data:/aingdesk/data \
  -v $(pwd)/uploads:/aingdesk/uploads \
  -v $(pwd)/logs:/aingdesk/logs \
  -p 7071:7071 \
  -w /aingdesk \
  aingdesk/aingdesk
```

- 国内用户可使用腾讯云原生构建镜像进行部署。

```bash
docker run -d \
  --name node \
  -v $(pwd)/data:/aingdesk/data \
  -v $(pwd)/uploads:/aingdesk/uploads \
  -v $(pwd)/logs:/aingdesk/logs \
  -p 7071:7071 \
  -w /aingdesk \
  docker.cnb.cool/aingdesk/aingdesk
```
