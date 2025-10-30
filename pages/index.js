export default function Home() {
  return (
    <div style={{ 
      padding: '50px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1>🍎 Apple Universal Link Setup</h1>
      <p>Apple App Site Association ไฟล์ถูก deploy แล้ว!</p>
      
      <div style={{ 
        background: '#f5f5f5', 
        padding: '20px', 
        borderRadius: '8px',
        margin: '20px 0'
      }}>
        <h3>📋 ข้อมูลการตั้งค่า:</h3>
        <ul>
          <li><strong>App IDs:</strong></li>
          <ul>
            <li>33C5EP5X49.com.kasikornbank.retail.mbanking.wap</li>
            <li>P7J7XPF2TM.com.ksoft.kplus.victoria</li>
          </ul>
          <li><strong>Supported Paths:</strong></li>
          <ul>
            <li>/th/actionwithkplus/*</li>
            <li>/th/kplus/kplusalipay/*</li>
            <li>/en/kplus/kplusalipay/*</li>
            <li>/th/kplus/deeplinkkplus/*</li>
            <li>/en/kplus/deeplinkkplus/*</li>
          </ul>
        </ul>
      </div>

      <div style={{ 
        background: '#e8f5e8', 
        padding: '20px', 
        borderRadius: '8px',
        margin: '20px 0'
      }}>
        <h3>✅ การทดสอบ:</h3>
        <p>
          เข้าไปที่: <br/>
          <code style={{ background: '#fff', padding: '5px' }}>
            https://your-domain.vercel.app/.well-known/apple-app-site-association
          </code>
        </p>
      </div>

      <div style={{ 
        background: '#fff3cd', 
        padding: '20px', 
        borderRadius: '8px',
        margin: '20px 0'
      }}>
        <h3>⚠️ หมายเหตุ:</h3>
        <ul>
          <li>ไฟล์ต้องไม่มี file extension (.json)</li>
          <li>Content-Type ต้องเป็น application/json</li>
          <li>ต้องเข้าถึงได้ผ่าน HTTPS</li>
          <li>ไฟล์ต้องอยู่ใน /.well-known/ directory</li>
        </ul>
      </div>
    </div>
  )
}
