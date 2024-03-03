/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images:{
      domains:["res.cloudinary.com","s3.ap-south-1.amazonaws.com","cdn-marketplacexyz.s3.ap-south-1.amazonaws.com","homeappliancecare.in","example.com","servicedibo.com"]
    }
};

export default nextConfig;
