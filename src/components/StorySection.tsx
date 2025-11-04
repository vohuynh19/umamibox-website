"use client";

// import { motion } from "framer-motion";
import Image from "next/image";
// import { useInView } from "framer-motion";
import { useRef } from "react";

/** Tiêu đề thường (capitalize, to hơn) */
const Title = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 capitalize">
    {children}
  </h2>
);

/** Tiêu đề căn giữa (UPPERCASE, nhỏ hơn 1 xíu, không border) */
const CenterTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-center">
    <p className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
      {children}
    </p>
  </div>
);

export default function StorySection() {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} id="story" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* 1) CÂU CHUYỆN */}
          <section id="story-founder" className="scroll-mt-24">
            <Title>Câu chuyện</Title>

            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-md mb-6">
              <Image
                src="/images/image21.jpg"
                alt="Câu chuyện – hình ảnh"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-lg text-gray-800 leading-relaxed lowercase">
              xin chào! tôi là hoàng hiệp. tôi đặc biệt quan tâm đến sức khỏe và
              đã dành nhiều năm để phát triển các sản phẩm công nghệ giúp kiểm tra,
              nâng cao chất lượng nông sản việt cho người tiêu dùng. gần đây, tôi
              nhận thấy một vấn đề trực tiếp ảnh hưởng đến sức khỏe gia đình: thịt.
              tôi và các cộng sự của mình đang làm việc với cùng một chí hướng:
              đem tới cho người việt nam thịt với tiêu chuẩn cao hơn, minh bạch hơn.
              chúng tôi mời bạn tham gia vào hành trình &ldquo;quay lại với miền quê&rdquo; này –
              <em> chắc chắn thịt sẽ ngọt!</em>
            </p>
          </section>

          {/* 2) TRUYỀN THÔNG */}
          <section id="press" className="scroll-mt-24">
            <CenterTitle>Truyền Thông</CenterTitle>

            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-md mb-6">
              <Image
                src="/images/image12.png"
                alt="VTV đưa tin"
                fill
                className="object-cover"
              />
            </div>

            <p className="mb-3 text-2xl font-semibold leading-snug text-gray-900">
              VTV chia sẻ: Trong nửa đầu năm 2025, Việt Nam đã nhập khẩu tới 103
              nghìn tấn thịt trâu Ấn Độ.
            </p>

            <p className="text-base text-gray-800 leading-relaxed mb-6">
              &ldquo;Đây là giống trâu chuyên nuôi lấy sữa, cho sản lượng sữa cao nhưng
              chất lượng thịt lại kém, ăn không ngon. Dù vậy, điều nghịch lý là loại
              thịt này vẫn tiêu thụ mạnh tại Việt Nam...&rdquo;
            </p>

            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-md mb-6">
              <Image
                src="/images/image11.png"
                alt="Điều tra thịt trâu Ấn Độ"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-base text-gray-800 leading-relaxed mb-6">
              Cơ quan điều tra đã thu giữ 17.000kg bột tinh chất để bơm vào thịt
              trâu Ấn Độ để tạo vân mỡ giống thịt bò cao cấp. Người tiêu dùng bỏ tiền
              mua thịt bò nhập khẩu đắt đỏ nhưng thực chất chỉ là thịt trâu giá rẻ.
            </p>

            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-md mb-6">
              <Image
                src="/images/image18.png"
                alt="Số liệu nhập khẩu"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-2xl font-semibold text-gray-900 mb-2">
              Tại sao &gt;50% thịt trên thị trường là nhập khẩu?
            </p>
            <p className="text-base text-gray-700 mb-4">
              Trong khi Việt Nam là quốc gia có truyền thống nông nghiệp – chăn nuôi
              dồi dào, chất lượng luôn đứng top đầu thế giới.
            </p>
            <p className="text-base text-gray-800 leading-relaxed mb-4">
              Giữa một đất nước trù phú như Việt Nam, thật khó tin khi hơn một nửa
              lượng thịt người Việt ăn mỗi ngày lại đến từ container lạnh vượt hàng
              chục nghìn cây số. Thịt nhập khẩu rẻ hơn vì quy mô công nghiệp lớn.
            </p>
            <p className="text-base text-gray-800 leading-relaxed mb-4">
              Thịt nội địa Việt Nam tuy an toàn và chất lượng tự nhiên, nhưng giá
              thành vẫn cao hơn do phần lớn các hộ chăn nuôi còn nhỏ lẻ, thiếu quy
              trình đồng bộ.
            </p>
            <p className="text-base text-gray-800 leading-relaxed mb-6">
              Mỗi chú bò được nuôi hữu cơ 100% – ăn cỏ, thân chuối, ngô, đậu và lúa
              gạo – nên thịt thơm ngọt, thuần khiết và đáng tin cậy.
            </p>
            <p className="text-base font-semibold text-gray-900">
              → Chúng tôi sẽ đưa thịt nội địa 100% theo tiêu chuẩn cao hơn đến với
              mỗi bàn ăn của người Việt.
            </p>
          </section>

          {/* 3) ƯU ĐIỂM */}
          <section id="advantages" className="scroll-mt-24">
            <Title>
              Biết thịt bạn và gia đình đang ăn đến từ đâu không còn là “biết thì tốt”, mà phải là “biết mới mua”
            </Title>
            <p className="text-base text-gray-800 leading-relaxed mb-6">
              Hãy cùng chúng tôi “quay lại với miền quê”, nơi những chú bò được chăm
              sóc, nuôi lớn trên vùng thổ nhưỡng trù phú của Ba Vì – Tam Đảo, Tây
              Nguyên. Thịt được nuôi, chăm sóc, bảo quản theo tiêu chuẩn Nhật Bản —
              tươi hơn, sạch hơn, minh bạch hơn.
            </p>
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-md mb-6">
              <Image
                src="/images/image14.png"
                alt="Minh bạch từ trang trại đến bàn ăn"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* 4) GIÁ & GIẢI PHÁP */}
          <section id="solution" className="scroll-mt-24">
            <Title>
              Thịt bò 100% nội địa Việt Nam theo tiêu chuẩn Nhật giao đến tận nhà chỉ với ~140k/bữa
            </Title>
            <p className="text-base text-gray-800 leading-relaxed mb-6">
              Chúng tôi hợp tác với các trang trại đạt chuẩn Nhật Bản tại Việt Nam,
              mang đến cho bạn loại thịt không chất độc hại, tươi ngon tự nhiên và dễ
              tiếp cận.
            </p>
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-md mb-6">
              <Image
                src="/images/image17.png"
                alt="Giao đến tận nhà"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* 5) QUY TRÌNH Ủ & BẢO QUẢN */}
          <section id="aging" className="scroll-mt-24">
            <Title>
              Ở nhiệt độ trung bình ở chợ Việt Nam, cứ mỗi 20 phút số lượng vi khuẩn nguy hiểm sẽ tăng gấp đôi
            </Title>
            <p className="text-base text-gray-700 mb-4">
              Sau 1 giờ, thịt bò đã bắt đầu mất an toàn. Phân hủy nhẹ sau 3 giờ và hư
              rõ sau 6–10 giờ. Nếu bảo quản nghiêm ngặt ở 0–4°C, thịt có thể giữ tươi
              3–5 ngày mà vẫn đảm bảo dinh dưỡng.
            </p>
            <p className="text-base text-gray-800 leading-relaxed mb-6">
              Chúng tôi ứng dụng công nghệ “Ủ ướt” và “Cấp lạnh siêu tốc –40°C” để
              khóa độ tươi, giúp thịt đạt 108% hương vị – mềm, ngọt và tươi đỉnh cao.
            </p>
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-md mb-6">
              <Image
                src="/images/image8.png"
                alt="Chuỗi lạnh khép kín"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* 6) PHẦN THƯỞNG */}
          <section id="rewards" className="scroll-mt-24">
            <CenterTitle>Phần Thưởng</CenterTitle>
            <p className="text-2xl font-semibold text-gray-900 mb-3">
              Sự ủng hộ của bạn sẽ cho phép chúng tôi cung cấp nhiều loại thịt hơn
              (thịt lợn, hải sản, thịt gà, …) và lan rộng phong trào &ldquo;quay lại với miền quê&rdquo; trên khắp Việt Nam.
            </p>
            <p className="text-base text-gray-800 leading-relaxed mb-6">
              Khi ủng hộ một trong những phần thưởng của chúng tôi, bạn sẽ không bị
              ràng buộc trách nhiệm nào khác. Sau khi nhận hàng, bạn có thể trở thành
              thành viên UmamiBox hàng tháng và nhận nhiều ưu đãi hơn nếu muốn.
            </p>

            {/* Ảnh hiển thị đầy đủ, không crop */}
            {["image19", "image7", "image3", "image9", "image4", "image1"].map(
              (img, i) => (
                <div
                  key={i}
                  className="relative w-full h-[360px] rounded-lg overflow-hidden border border-gray-200 bg-white p-2 shadow-sm mb-4"
                >
                  <Image
                    src={`/images/${img}.png`}
                    alt={img}
                    fill
                    className="object-contain"
                  />
                </div>
              )
            )}
          </section>

          {/* 7) ĐỘI NGŨ */}
          <section id="team" className="scroll-mt-24">
            <CenterTitle>Đội Ngũ</CenterTitle>
            {["image10", "image16"].map((img, i) => (
              <div
                key={i}
                className="relative w-full h-[380px] rounded-lg overflow-hidden border border-gray-200 bg-white p-2 shadow-sm mb-4"
              >
                <Image
                  src={`/images/${img}.png`}
                  alt={img}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </section>

          {/* 8) FAQ */}
          <section id="faq" className="scroll-mt-24">
            <Title>Câu hỏi thường gặp</Title>
            <div className="space-y-8">
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  Bao nhiêu thịt trong mỗi hộp?
                </p>
                <p className="mt-2 text-gray-800 leading-relaxed">
                  3,5 - 5kg tùy thuộc vào lựa chọn miếng thịt. Phần thịt đủ cho 15–20
                  bữa ăn riêng lẻ với khẩu phần 200–300g.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  Tại sao phải gọi hỗ trợ – mở bán đặt trước?
                </p>
                <p className="mt-2 text-gray-800 leading-relaxed">
                  Để đảm bảo chất lượng thịt ngay từ đầu, chúng tôi cần nguồn vốn đủ
                  để đầu tư vào công nghệ bảo quản và cam kết với các trang trại uy tín.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  Bạn nhập thịt từ đâu?
                </p>
                <p className="mt-2 text-gray-800 leading-relaxed">
                  Tất cả thịt bò của chúng tôi đều đến từ các trang trại tại Tây Nguyên,
                  Tam Đảo và Ba Vì — 100% nội địa Việt Nam.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  Bạn chọn loại thịt tôi sẽ nhận được hàng tháng phải không?
                </p>
                <p className="mt-2 text-gray-800 leading-relaxed">
                  Đúng vậy. Đội ngũ chúng tôi chọn lọc kỹ từng hộp thịt mỗi tháng, đảm
                  bảo hương vị đa dạng và chất lượng cao.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  Thịt được giao như thế nào?
                </p>
                <p className="mt-2 text-gray-800 leading-relaxed">
                  Thịt được cấp lạnh nhanh bằng công nghệ flash freeze, đóng gói riêng
                  lẻ và vận chuyển trong hộp xốp chứa đá khô để đảm bảo tươi ngon.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  Thịt có tươi khi nhận không?
                </p>
                <p className="mt-2 text-gray-800 leading-relaxed">
                  Lượng đá khô được tính toán theo vị trí giao hàng. Dù bay hơi, thịt
                  vẫn đông lạnh hoặc mát lạnh khi chạm vào.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  Tôi có thể chọn ngày giao hàng không?
                </p>
                <p className="mt-2 text-gray-800 leading-relaxed">
                  Có. Chúng tôi sẽ liên hệ để sắp xếp thời gian giao hàng phù hợp nhất.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  Có cần ai ở nhà khi nhận hàng không?
                </p>
                <p className="mt-2 text-gray-800 leading-relaxed">
                  Không bắt buộc, nhưng bạn nên mang hộp vào sớm nhất có thể để đảm bảo
                  độ tươi ngon và chất lượng thịt cao nhất.
                </p>
              </div>
            </div>
          </section>

          {/* 9) LIÊN HỆ */}
          <section id="contact" className="scroll-mt-24">
            <Title>Câu hỏi khác?</Title>
            <p className="text-gray-800">
              Chúng tôi rất sẵn lòng hỗ trợ! Gửi cho chúng tôi một tin nhắn hoặc gọi
              trực tiếp.
            </p>
            <div className="mt-3 space-y-1">
              <a
                href="mailto:support@umamibox.vn"
                className="block font-semibold text-green-700 underline"
              >
                support@umamibox.vn
              </a>
              <a
                href="tel:+84369088090"
                className="block font-semibold text-green-700 underline"
              >
                +84 369088090
              </a>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
