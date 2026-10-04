'use client';
import { useState } from 'react';

type MenuItem = {
  id: number;
  name: string;
  ordinary?: number | null;
  jumbo?: number | null;
  small?: number | null;
  medium?: number | null;
  price?: number;
};

type CartItem = MenuItem & {
  type: string;
  price: number;
  qty: number;
};

type DeliveryInfo = {
  area: string;
  street: string;
  building: string;
  floor: string;
  apartment: string;
  phone: string;
};

export default function RestaurantMenu() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderType, setOrderType] = useState('delivery');
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    area: '', street: '', building: '', floor: '', apartment: '', phone: ''
  });

  const menuSections: { category: string; image: string; items: MenuItem[] }[] = [
    {
      category: "سندوتشات",
      image: "/images/menu/sandwiches.jpg",
      items: [
        { id: 1, name: "اقاشي لحم", ordinary: 90, jumbo: 135 },
        { id: 2, name: "اقاشي فراخ", ordinary: 85, jumbo: 120 },
        { id: 3, name: "اقاشي سمك", ordinary: 95, jumbo: 140 },
        { id: 4, name: "شيش طاووق", ordinary: 85, jumbo: 120 },
        { id: 5, name: "شيش كباب", ordinary: 120, jumbo: 150 },
        { id: 6, name: "كفتة", ordinary: 110, jumbo: 140 },
        { id: 7, name: "كريسبي", ordinary: 100, jumbo: 130 },
        { id: 8, name: "كريسبي بالجبنة", ordinary: 110, jumbo: 145 },
        { id: 9, name: "بطاطس", ordinary: 50 },
        { id: 10, name: "بطاطس بالجبنة", ordinary: 70 }
      ]
    },
    {
      category: "برجر",
      image: "/images/menu/burger.jpg",
      items: [
        { id: 11, name: "برجر عادي", price: 100 },
        { id: 12, name: "برجر جامبو", price: 150 },
        { id: 13, name: "إضافة هالبينو", price: 10 }
      ]
    },
    {
      category: "لحوم وأسماك بالكيلو",
      image: "/images/menu/grills.jpg",
      items: [
        { id: 14, name: "كيلو شية ضاني جمر / صاج", price: 850 },
        { id: 15, name: "كيلو شية ضاني صافي جمر / صاج", price: 1500 },
        { id: 16, name: "كيلو شية صافي فلتة", price: 1000 },
        { id: 17, name: "ضلع ضاني 800 - 1000 جرام", price: 850 },
        { id: 18, name: "كيلو أقاشي فراخ", price: 1000 },
        { id: 19, name: "كيلو أقاشي لحم", price: 1250 },
        { id: 20, name: "كيلو أقاشي سمك", price: 1250 },
        { id: 21, name: "كيلو شيش طاووق", price: 800 },
        { id: 22, name: "كيلو شيش كباب", price: 1250 },
        { id: 23, name: "كيلو كفتة", price: 825 },
        { id: 24, name: "كيلو بلطي مقلي", price: 225 },
        { id: 25, name: "كيلو بلطي مشوي", price: 225 },
        { id: 26, name: "كيلو فيليه مقلي", price: 600 },
        { id: 27, name: "نصف كيلو فيليه مقلي", price: 300 },
        { id: 28, name: "كيلو فيليه مشوي", price: 600 },
        { id: 29, name: "نصف كيلو فيليه مشوي", price: 300 }
      ]
    },
    {
      category: "الوجبات",
      image: "/images/menu/meals.jpg",
      items: [
        { id: 30, name: "وجبة أقاشي لحم (3 أسياخ)", price: 230 },
        { id: 31, name: "وجبة أقاشي فراخ (3 أسياخ)", price: 200 },
        { id: 32, name: "وجبة أقاشي سمك (3 أسياخ)", price: 235 },
        { id: 33, name: "وجبة شيش طاووق (3 أسياخ)", price: 235 },
        { id: 34, name: "وجبة شيش كباب (3 أسياخ)", price: 320 },
        { id: 35, name: "وجبة كفتة (3 أسياخ)", price: 280 },
        { id: 36, name: "وجبة كريسبي", price: 250 },
        { id: 37, name: "فرخة كاملة مشوية على الجمر", price: 390 },
        { id: 38, name: "نصف فرخة مشوية على الجمر", price: 210 },
        { id: 39, name: "فرخة كاملة أقانشي", price: 435 },
        { id: 40, name: "نصف فرخة أقانشي", price: 235 },
        { id: 41, name: "طبق بطاطس", price: 60 },
        { id: 42, name: "طبق بطاطس بالجبنة", price: 85 }
      ]
    },
    {
      category: "البيتزا والفطائر",
      image: "/images/menu/pizza.jpg",
      items: [
        { id: 43, name: "بيتزا فراخ", small: 190, medium: 225 },
        { id: 44, name: "بيتزا هوت دوق", small: 190, medium: 225 },
        { id: 45, name: "بيتزا زنغنا مشكلة", small: 215, medium: 250 },
        { id: 46, name: "بيتزا مارجريتا", small: 165, medium: 190 }
      ]
    },
    {
      category: "سلطات",
      image: "/images/menu/salads.jpg",
      items: [
        { id: 47, name: "سلطة دقوة", price: 50 },
        { id: 48, name: "سلطة خضراء", price: 40 },
        { id: 49, name: "سلطة طحينية", price: 30 },
        { id: 50, name: "مخلل", price: 30 },
        { id: 51, name: "زيادة بصل وليمون", price: 20 },
        { id: 52, name: "زيادة 3 عيشات", price: 10 }
      ]
    },
    {
      category: "العصائر والمشروبات",
      image: "/images/menu/juices.jpg",
      items: [
        { id: 53, name: "فراولة", price: 55 },
        { id: 54, name: "فراولة بالحليب", price: 65 },
        { id: 55, name: "مانجو", price: 60 },
        { id: 56, name: "مانجو بالحليب", price: 70 },
        { id: 57, name: "موز بالحليب", price: 65 },
        { id: 58, name: "عصير كوكتيل", price: 70 },
        { id: 59, name: "برتقال", price: 50 },
        { id: 60, name: "ليمون", price: 40 },
        { id: 61, name: "ليمون نعناع", price: 50 },
        { id: 62, name: "تبلدي", price: 70 },
        { id: 63, name: "عرديب", price: 70 },
        { id: 64, name: "كركدي", price: 50 },
        { id: 65, name: "غباشة", price: 50 },
        { id: 66, name: "مشروبات غازية", price: 35 },
        { id: 67, name: "مياه معدنية", price: 10 }
      ]
    },
    {
      category: "قهوة",
      image: "/images/menu/coffee.jpg",
      items: [
        { id: 68, name: "فرنساوي", price: 60 },
        { id: 69, name: "اسبريسو", price: 60 },
        { id: 70, name: "نسكافيه", price: 50 },
        { id: 71, name: "قهوة كبايه", price: 40 },
        { id: 72, name: "قهوة بندق", price: 60 },
        { id: 73, name: "قهوة بالشيكولاتة", price: 60 },
        { id: 74, name: "قهوة فانيليا", price: 60 },
        { id: 75, name: "قهوة تركي", price: 60 },
        { id: 76, name: "جبنة في جبنة صغيرة", price: 150 },
        { id: 77, name: "جبنة في جبنة وسط", price: 300 },
        { id: 78, name: "جبنة في جبنة كبيرة", price: 450 }
      ]
    },
    {
      category: "مشروبات ساخنة",
      image: "/images/menu/hot-drinks.jpg",
      items: [
        { id: 79, name: "شاي احمر", price: 30 },
        { id: 80, name: "شاي بلبن", price: 60 },
        { id: 81, name: "شاي أخضر", price: 60 },
        { id: 82, name: "هوت شوكلت", price: 70 },
        { id: 83, name: "سحلب", price: 70 },
        { id: 84, name: "كاكاو بالبندق", price: 70 },
        { id: 85, name: "اوفلتين", price: 50 },
        { id: 86, name: "مكس كوفي", price: 50 },
        { id: 87, name: "كبتشينو", price: 70 },
        { id: 88, name: "امريكانو", price: 70 },
        { id: 89, name: "ينسون", price: 30 },
        { id: 90, name: "حلبة", price: 30 },
        { id: 91, name: "كركدي", price: 30 },
        { id: 92, name: "ليمون جنزبيل", price: 30 },
        { id: 93, name: "قرفة", price: 30 }
      ]
    },
    {
      category: "حلويات",
      image: "/images/menu/desserts.jpg",
      items: [
        { id: 94, name: "أرز باللبن لوتس", price: 50 },
        { id: 95, name: "ترافيل", price: 50 },
        { id: 96, name: "كريم كراميل", price: 50 }
      ]
    }
  ];

  const addToCart = (item: MenuItem, type: string = 'طلب', price: number) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id && i.type === type);
      if (existing) {
        return prev.map(i => i.id === item.id && i.type === type ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, type, price, qty: 1 }];
    });
  };

  const updateQty = (id: number, type: string, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id && item.type === type) {
          const newQty = item.qty + delta;
          return newQty > 0 ? { ...item, qty: newQty } : null;
        }
        return item;
      }).filter(Boolean) as CartItem[];
    });
  };

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const sendToWhatsApp = () => {
    if (orderType !== 'delivery') return;
    let message = `*طلب جديد من مطعم هاي زنغنا - فرع الدقي*%0A`;
    message += `نوع الطلب: دليفري 🛵%0A%0A`;
    message += `*الطلبات:*%0A`;
    cart.forEach(i => {
      message += `- ${i.name} (${i.type}) × ${i.qty} = ${i.price * i.qty} ج.س%0A`;
    });
    message += `%0A*الإجمالي:* ${totalAmount} ج.س%0A%0A`;
    message += `*بيانات التوصيل:*%0A`;
    message += `المنطقة: ${deliveryInfo.area}%0A`;
    message += `الشارع: ${deliveryInfo.street}%0A`;
    message += `رقم العمارة: ${deliveryInfo.building}%0A`;
    message += `الدور: ${deliveryInfo.floor} | الشقة: ${deliveryInfo.apartment}%0A`;
    message += `رقم التلفون: ${deliveryInfo.phone}`;

    const url = `https://wa.me/201140672440?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <main
      className="min-h-screen text-amber-50 p-4 md:p-8 font-sans bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `linear-gradient(rgba(70, 35, 10, 0.45), rgba(70, 35, 10, 0.45)), url('/wood-bg.jpg')` }}
    >
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-8 border-b border-amber-500/60 pb-6 bg-[#3d1e0a]/90 p-6 rounded-2xl shadow-2xl backdrop-blur-sm">
          <h1 className="text-4xl font-extrabold text-amber-300 mb-2">هاي زنغنا للأقاشي</h1>
          <p className="text-amber-100 text-lg">فرع الدقي - المنيو الكلاسيكي الأصلي</p>
        </header>

        {/* عرض أقسام المنيو كاملة */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {menuSections.map((sec) => (
            <div key={sec.category} className="relative bg-[#2c1507]/90 border border-amber-600/50 p-5 pt-12 rounded-2xl shadow-2xl backdrop-blur-sm">

              {/* صورة القسم - متداخلة مع الحد العلوي في النص */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <img
                  src={sec.image}
                  alt={sec.category}
                  className="w-20 h-20 object-cover rounded-full border-4 border-amber-500 shadow-xl bg-amber-900"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>

              <h2 className="text-xl font-bold text-amber-300 mb-4 border-b border-amber-700/50 pb-2 text-center">
                {sec.category}
              </h2>

              <div className="space-y-3">
                {sec.items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-[#1a0c04]/80 p-3 rounded-xl border border-amber-900/40">
                    <span className="font-medium text-amber-100 text-sm">{item.name}</span>
                    <div className="flex gap-2 text-xs">
                      {item.price !== undefined && (
                        <button onClick={() => addToCart(item, 'أساسي', item.price!)} className="bg-amber-600 hover:bg-amber-500 text-zinc-950 font-bold px-3 py-1 rounded">
                          السعر: {item.price} ج.س
                        </button>
                      )}
                      {item.ordinary !== undefined && item.ordinary !== null && item.small === undefined && (
                        <button onClick={() => addToCart(item, 'عادي', item.ordinary!)} className="bg-amber-900/90 hover:bg-amber-700 text-amber-200 px-2 py-1 rounded">
                          عادي: {item.ordinary}
                        </button>
                      )}
                      {item.jumbo !== undefined && item.jumbo !== null && (
                        <button onClick={() => addToCart(item, 'جامبو', item.jumbo!)} className="bg-amber-600 hover:bg-amber-500 text-zinc-950 font-bold px-2 py-1 rounded">
                          جامبو: {item.jumbo}
                        </button>
                      )}
                      {item.small !== undefined && (
                        <button onClick={() => addToCart(item, 'وسط', item.small!)} className="bg-amber-900/90 hover:bg-amber-700 text-amber-200 px-2 py-1 rounded">
                          وسط: {item.small}
                        </button>
                      )}
                      {item.medium !== undefined && (
                        <button onClick={() => addToCart(item, 'كبير', item.medium!)} className="bg-amber-600 hover:bg-amber-500 text-zinc-950 font-bold px-2 py-1 rounded">
                          كبير: {item.medium}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* سلة الطلبات */}
        <div className="bg-[#2c1507]/95 border border-amber-500 p-6 rounded-2xl shadow-2xl backdrop-blur-md">
          <h2 className="text-2xl font-bold text-amber-300 mb-4">🛒 سلة الطلبات</h2>

          {cart.length === 0 ? (
            <p className="text-amber-200/60 mb-6">السلة فارغة، اختر وجباتك من المنيو بالأعلى.</p>
          ) : (
            <div className="space-y-3 mb-6">
              {cart.map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-amber-900/50 pb-3 text-sm">
                  <div>
                    <span className="font-bold text-amber-100">{item.name}</span>
                    <span className="text-amber-300 text-xs block">({item.type}) - {item.price} ج.س</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center bg-amber-950 border border-amber-700 rounded-lg overflow-hidden">
                      <button onClick={() => updateQty(item.id, item.type, -1)} className="px-2.5 py-1 bg-amber-900 hover:bg-amber-700 text-amber-100 font-bold">-</button>
                      <span className="px-3 text-amber-100 font-bold">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.type, 1)} className="px-2.5 py-1 bg-amber-700 hover:bg-amber-600 text-amber-50 font-bold">+</button>
                    </div>
                    <span className="text-amber-400 font-bold w-16 text-left">{item.price * item.qty} ج.س</span>
                  </div>
                </div>
              ))}
              <div className="flex justify-between text-xl font-bold text-amber-300 pt-3 border-t border-amber-600">
                <span>الإجمالي الكلي:</span>
                <span>{totalAmount} ج.س</span>
              </div>
            </div>
          )}

          {/* نوع الطلب */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setOrderType('delivery')}
              className={`flex-1 py-3 rounded-xl font-bold transition ${orderType === 'delivery' ? 'bg-amber-500 text-zinc-950 shadow-lg' : 'bg-amber-950 text-amber-300'}`}>
              دليفري 🛵
            </button>
            <button
              onClick={() => setOrderType('dine-in')}
              className={`flex-1 py-3 rounded-xl font-bold transition ${orderType === 'dine-in' ? 'bg-amber-500 text-zinc-950 shadow-lg' : 'bg-amber-950 text-amber-300'}`}>
              استلام من الصالة 🍽️
            </button>
          </div>

          {/* حقول الدليفري */}
          {orderType === 'delivery' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-[#1a0c04] p-4 rounded-xl border border-amber-700">
              <input type="text" placeholder="اسم المنطقة" value={deliveryInfo.area} onChange={e => setDeliveryInfo({...deliveryInfo, area: e.target.value})} className="p-2.5 bg-zinc-900 border border-amber-800 rounded-lg text-amber-100 text-sm focus:outline-none focus:border-amber-500" />
              <input type="text" placeholder="اسم الشارع" value={deliveryInfo.street} onChange={e => setDeliveryInfo({...deliveryInfo, street: e.target.value})} className="p-2.5 bg-zinc-900 border border-amber-800 rounded-lg text-amber-100 text-sm focus:outline-none focus:border-amber-500" />
              <input type="text" placeholder="رقم العمارة" value={deliveryInfo.building} onChange={e => setDeliveryInfo({...deliveryInfo, building: e.target.value})} className="p-2.5 bg-zinc-900 border border-amber-800 rounded-lg text-amber-100 text-sm focus:outline-none focus:border-amber-500" />
              <input type="text" placeholder="الدور" value={deliveryInfo.floor} onChange={e => setDeliveryInfo({...deliveryInfo, floor: e.target.value})} className="p-2.5 bg-zinc-900 border border-amber-800 rounded-lg text-amber-100 text-sm focus:outline-none focus:border-amber-500" />
              <input type="text" placeholder="رقم الشقة" value={deliveryInfo.apartment} onChange={e => setDeliveryInfo({...deliveryInfo, apartment: e.target.value})} className="p-2.5 bg-zinc-900 border border-amber-800 rounded-lg text-amber-100 text-sm focus:outline-none focus:border-amber-500" />
              <input type="text" placeholder="رقم التلفون" value={deliveryInfo.phone} onChange={e => setDeliveryInfo({...deliveryInfo, phone: e.target.value})} className="p-2.5 bg-zinc-900 border border-amber-800 rounded-lg text-amber-100 text-sm focus:outline-none focus:border-amber-500" />
            </div>
          )}

          {/* زر الواتساب */}
          <button
            onClick={sendToWhatsApp}
            disabled={orderType !== 'delivery' || cart.length === 0}
            className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition ${
              orderType === 'delivery' && cart.length > 0
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer'
                : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
            }`}>
            {orderType === 'delivery' ? 'إرسال الطلب عبر الواتساب 📱' : 'الطلب في الصالة لا يتطلب إرسال واتساب 🍽️'}
          </button>
        </div>
      </div>
    </main>
  );
}
