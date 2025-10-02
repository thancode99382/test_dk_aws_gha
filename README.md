# Express Docker AWS GitHub Actions Demo

A simple Express.js application deployed to AWS EC2 using Docker and GitHub Actions.

## 🚀 Features

- Express.js web server
- Docker containerization
- Automated CI/CD with GitHub Actions
- AWS EC2 deployment

## 📋 Prerequisites

1. **AWS EC2 Instance**
   - Instance running with Docker installed
   - Security group allowing SSH (port 22) and HTTP (port 80)
   - Public IP: `100.27.201.50`

2. **GitHub Secrets** (configured in repository settings)
   - `EC2_HOST`: Your EC2 public IP address
   - `EC2_USER`: EC2 username (usually `ubuntu` or `ec2-user`)
   - `EC2_KEY`: Your EC2 private key (.pem file content)

## 🛠️ Setup

1. **Configure GitHub Secrets**:
   - Go to your repository → Settings → Secrets and variables → Actions
   - Add the required secrets listed above

2. **EC2 Setup**:
   ```bash
   # Install Docker on Ubuntu EC2
   sudo apt update
   sudo apt install docker.io -y
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker ubuntu
   ```

3. **Security Group Configuration**:
   - Allow inbound traffic on port 22 (SSH)
   - Allow inbound traffic on port 80 (HTTP)

## 🚀 Deployment

Push to the `main` branch to trigger automatic deployment:

```bash
git add .
git commit -m "Deploy to EC2"
git push origin main
```

## 🔍 Verification

After deployment, visit:
- **Main app**: http://100.27.201.50/
- **Health check**: http://100.27.201.50/health

## 📁 Project Structure

```
.
├── .github/workflows/deploy.yml  # GitHub Actions workflow
├── .dockerignore                 # Docker ignore file
├── Dockerfile                    # Docker configuration
├── index.js                      # Express application
├── package.json                  # Node.js dependencies
└── README.md                     # This file
```

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Run locally
npm start

# Build Docker image
docker build -t express-docker-app .

# Run Docker container
docker run -p 3000:3000 express-docker-app
```
