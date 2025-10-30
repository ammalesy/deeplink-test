export default function TestDeeplink() {
  const handleDeeplinkTest = () => {
    const url = "https://nuizoro.xyz/deeplink?token=xxx";
    window.open(url, '_blank');
  };

  return (
    <div style={{ 
      padding: '50px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1>🧪 Test Deeplink Page</h1>
      <p>หน้าทดสอบการเปิด Deeplink URL</p>
      
      <div style={{ 
        background: '#f0f8ff', 
        padding: '30px', 
        borderRadius: '8px',
        margin: '20px 0',
        textAlign: 'center'
      }}>
        <h3>📱 ทดสอบเปิด Deeplink</h3>
        <p style={{ margin: '20px 0' }}>
          กดปุ่มด้านล่างเพื่อเปิด URL ในแท็บใหม่
        </p>
        <p style={{ 
          background: '#fff', 
          padding: '10px', 
          borderRadius: '4px',
          fontFamily: 'monospace',
          margin: '20px 0'
        }}>
          https://nuizoro.xyz/deeplink?token=xxx
        </p>
        
        <button 
          onClick={handleDeeplinkTest}
          style={{
            background: '#007bff',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            fontSize: '18px',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#0056b3';
            e.target.style.transform = 'translateY(-1px)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = '#007bff';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          🚀 เปิด Deeplink
        </button>
      </div>

      <div style={{ 
        background: '#fff3cd', 
        padding: '20px', 
        borderRadius: '8px',
        margin: '20px 0'
      }}>
        <h3>📋 วิธีการทดสอบ:</h3>
        <ol>
          <li>กดปุ่ม "เปิด Deeplink" ด้านบน</li>
          <li>URL จะเปิดในแท็บใหม่</li>
          <li>หากมีแอปที่รองรับ Universal Link ติดตั้งอยู่ แอปจะเปิดขึ้นมา</li>
          <li>หากไม่มีแอป จะแสดงหน้าเว็บปกติ</li>
        </ol>
      </div>

      <div style={{ 
        background: '#e8f5e8', 
        padding: '20px', 
        borderRadius: '8px',
        margin: '20px 0'
      }}>
        <h3>🔍 ข้อมูลเพิ่มเติม:</h3>
        <p>
          กลับไปหน้าแรก: <a href="/" style={{ color: '#007bff' }}>Home</a> | 
          <a href="/deeplink?token=xxx" style={{ color: '#007bff', marginLeft: '10px' }}>Deeplink Page</a>
        </p>
        <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
          หมายเหตุ: Universal Link จะทำงานได้เมื่อเข้าผ่าน Safari และมีแอปที่รองรับติดตั้งอยู่
        </p>
      </div>
    </div>
  );
}
