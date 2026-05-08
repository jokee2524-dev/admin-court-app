// Service Worker พื้นฐานสำหรับ PWA
self.addEventListener('install', (event) => {
    console.log('Service Worker: ติดตั้งเรียบร้อย');
});

self.addEventListener('fetch', (event) => {
    // ปล่อยให้ระบบโหลดข้อมูลจากอินเทอร์เน็ตตามปกติ
});