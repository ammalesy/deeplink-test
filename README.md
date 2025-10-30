# Apple Universal Link Deployment

## 🚀 Deploy ไปยัง Vercel (ฟรี)

### 1. เตรียม GitHub Repository
```bash
git init
git add .
git commit -m "Initial commit: Apple Universal Link setup"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

### 2. Deploy ผ่าน Vercel
1. ไปที่ [vercel.com](https://vercel.com)
2. Sign up/Login ด้วย GitHub account
3. กด "New Project"
4. เลือก repository ของคุณ
5. กด "Deploy"

### 3. ตั้งค่า Custom Domain (ถ้าต้องการ)
1. ใน Vercel Dashboard > Settings > Domains
2. เพิ่ม domain ของคุณ
3. ตั้งค่า DNS ตามที่ Vercel แนะนำ

## 📋 ไฟล์สำคัญ

- `public/.well-known/apple-app-site-association` - ไฟล์หลักสำหรับ Universal Link
- `next.config.js` - ตั้งค่า headers ให้ถูกต้อง
- `package.json` - dependencies สำหรับ Next.js

## ✅ การทดสอบ

1. เข้าไปที่: `https://your-domain.vercel.app/.well-known/apple-app-site-association`
2. ตรวจสอบว่าได้ JSON ที่ถูกต้อง
3. ใช้ [Apple App Site Association Validator](https://branch.io/resources/aasa-validator/)

## 🌐 ตัวเลือก Hosting อื่นๆ (ฟรี)

### Netlify
1. ไปที่ [netlify.com](https://netlify.com)
2. Drag & drop folder `public`
3. ตั้งค่า redirects ใน `_redirects` file

### GitHub Pages
1. Enable GitHub Pages ใน repository settings
2. เลือก source เป็น `main` branch
3. ไฟล์ต้องอยู่ใน root หรือ `docs/` folder

### Firebase Hosting
1. `npm install -g firebase-tools`
2. `firebase login`
3. `firebase init hosting`
4. `firebase deploy`

## 🔧 การแก้ไขปัญหา

### ไฟล์ไม่ถูก serve ด้วย Content-Type ที่ถูกต้อง
- ตรวจสอบ `next.config.js` headers configuration
- ใน Netlify: ใช้ `_headers` file
- ใน Apache: ใช้ `.htaccess`

### Universal Link ไม่ทำงาน
1. ตรวจสอบ App ID ใน iOS project
2. ตรวจสอบ Associated Domains entitlement
3. ลองใน Safari (ไม่ใช่ใน app)
4. Clear Safari cache และลองใหม่

## 📱 การตั้งค่าใน iOS App

ใน iOS project:
1. เปิด Capabilities > Associated Domains
2. เพิ่ม: `applinks:your-domain.com`
3. Implement `application(_:continue:restorationHandler:)` ใน AppDelegate

```swift
func application(_ application: UIApplication, 
                continue userActivity: NSUserActivity, 
                restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
    
    if userActivity.activityType == NSUserActivityTypeBrowsingWeb {
        if let url = userActivity.webpageURL {
            // Handle universal link
            return handleUniversalLink(url: url)
        }
    }
    return false
}
```
