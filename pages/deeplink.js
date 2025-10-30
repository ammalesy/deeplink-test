export default function Deeplink() {
  return (
    <div style={{ 
      padding: '50px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1>🔗 Deeplink Test Page</h1>
      <p>หน้าทดสอบ Deeplink สำหรับ Universal Link</p>
      
      <div style={{ 
        background: '#f0f8ff', 
        padding: '20px', 
        borderRadius: '8px',
        margin: '20px 0'
      }}>
        <h3>📱 ทดสอบ Deeplink:</h3>
        <p>หน้านี้สามารถใช้ทดสอบการเปิดแอปผ่าน Universal Link</p>
        <p>URL ปัจจุบัน: <code>/deeplink</code></p>
      </div>

      <div style={{ 
        background: '#fff3cd', 
        padding: '20px', 
        borderRadius: '8px',
        margin: '20px 0'
      }}>
        <h3>⚠️ หมายเหตุ:</h3>
        <ul>
          <li>ต้องมีแอปที่รองรับ Universal Link ติดตั้งอยู่ในเครื่อง</li>
          <li>ต้องเข้าผ่าน Safari หรือ browser อื่นๆ (ไม่ใช่ในแอป)</li>
          <li>ต้องใช้ HTTPS และ domain ที่ถูกต้อง</li>
        </ul>
      </div>

      <div style={{ 
        background: '#e8f5e8', 
        padding: '20px', 
        borderRadius: '8px',
        margin: '20px 0'
      }}>
        <h3>🔍 ข้อมูลเพิ่มเติม:</h3>
        <p>
          กลับไปหน้าแรก: <a href="/" style={{ color: '#007bff' }}>Home</a>
        </p>
        <p>
          Apple App Site Association: <br/>
          <code style={{ background: '#fff', padding: '5px' }}>
            /.well-known/apple-app-site-association
          </code>
        </p>
      </div>
    </div>
  );
}
