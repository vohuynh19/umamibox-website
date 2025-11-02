"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} id="story" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Campaign
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            Đề chính: UmamiBox: Mở cửa nhận thịt bò khỏe mạnh, 100% nội địa Việt
            Nam với tiêu chuẩn Nhật
          </p>
          <p className="text-lg text-gray-600">
            Đề phụ: Nguồn Protein khỏe mạnh hữu cơ 100% đến từ vùng đồng cỏ thổ
            nhưỡng tại Ba Vì-Tam Đảo, Tây Nguyên, Việt Nam. Minh bạch bạn có thể
            xem, Vị ngon bạn có thể nếm, Giao tận nhà khi bạn cần.
          </p>
        </motion.div>

        {/* Story Sections */}
        <div className="space-y-12">
          {/* 1. Founder Introduction */}
          <section id="story-founder" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Giới thiệu founders
            </h2>
            <div className="flex flex-col lg:flex-row items-start gap-8 mb-6">
              <div className="lg:w-1/3">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/kvs-xet-7.jpg"
                    alt="Founder"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-2/3">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Xin chào! Tôi là Hoàng Hiệp. Tôi là người đặc biệt quan tâm
                  đến sức khỏe đã dành 4 năm qua để phát triển các sản phẩm công
                  nghệ giúp kiểm tra, nâng cao chất lượng nông sản Việt đối với
                  người tiêu dùng. Tôi gần đây nhận thấy một vấn đề trực tiếp ảnh
                  hưởng đến sức khỏe gia đình: thịt.{" "}
                  <span className="font-medium text-gray-900">
                    Tôi và các cộng sự của mình đang làm việc với cùng 1 chí hướng:
                    để đem cho người Việt Nam thịt với tiêu chuẩn cao hơn. Chúng
                    tôi xin mời bạn tham gia cùng chúng tôi trong hành trình &ldquo;quay
                    lại với miền quê&rdquo; này - Chắc chắn thịt sẽ ngọt!
                  </span>
                </p>
              </div>
            </div>
          </section>

          {/* 2. About Imported vs Domestic Meat */}
          <section id="story-imported" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Về thịt nhập khẩu & nội địa
            </h2>
            <p className="text-base text-gray-600 mb-4">
              Hiện nay, trên một nửa lượng thịt bò mà bạn mua trên thị trường là
              thịt bò nhập khẩu, trong đó 76% đến từ Ấn Độ.
            </p>
            <div className="mb-6">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/image3.png"
                  alt="News about imported meat"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Tiêu đề: Tại sao &gt;50% thịt trên thị trường là nhập khẩu?
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Sub: Trong khi Việt Nam là quốc gia có truyền thống nông nghiệp –
              chăn nuôi dồi dào, chất lượng luôn đứng top đầu thế giới.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Giữa một đất nước trù phú như Việt Nam, thật khó tin khi hơn một nửa
              lượng thịt người Việt đang ăn mỗi ngày lại đến từ những container lạnh
              vượt hàng chục nghìn cây số. Thịt nhập khẩu rẻ hơn vì được sản xuất
              hàng loạt với quy mô lớn.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Thịt nội địa Việt Nam tuy an toàn và chất lượng tự nhiên, nhưng giá
              thành vẫn cao hơn so với thịt nhập khẩu bởi phần lớn các hộ chăn nuôi
              còn nhỏ lẻ, chưa có quy trình chăn nuôi – giết mổ – bảo quản đồng bộ.
              Chính điều đó khiến thịt Việt dù tốt nhưng chưa đến được với số đông
              người tiêu dùng. Mỗi chú bò được nuôi theo hướng hữu cơ 100% – ăn cỏ,
              thân chuối, ngô, các loại đậu và lúa gạo – nên quá trình nuôi chậm hơn,
              tốn công chăm sóc hơn, nhưng đổi lại là chất lượng thịt thơm ngọt,
              thuần khiết và đáng tin cậy.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              -&gt; Chúng tôi sẽ đưa thịt nội địa 100% theo tiêu chuẩn cao hơn đến
              với mỗi bàn ăn của người Việt.
            </p>
          </section>

          {/* 3. Vietnam's Advantages */}
          <section id="story-advantages" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Ưu điểm thổ nhưỡng, khí hậu Việt Nam để nuôi bò chất lượng cao
            </h2>
            <p className="text-lg font-semibold text-gray-800 mb-4">
              Title: Biết thịt bạn và gia đình đang ăn đến từ đâu không còn là
              &ldquo;biết thì tốt&rdquo;, mà phải là &ldquo;biết mới mua&rdquo;
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Hãy cùng chúng tôi &ldquo;quay lại với miền quê&rdquo;, nơi những chú bò được
              chăm sóc, nuôi lớn trên vùng thổ nhưỡng trù phú của Ba Vì-Tam Đảo,
              Tây Nguyên. Từ những nông trại 100% nội địa Việt Nam, cùng với quy
              trình nuôi dưỡng, chăm sóc và bảo quản theo tiêu chuẩn Nhật Bản,
              UmamiBox sẽ đem lại cho bạn thịt tươi hơn, sạch hơn và minh bạch từ
              trang trại đến bàn ăn.
            </p>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md mb-6">
              <Image
                src="/images/image5.png"
                alt="Vietnamese farm advantages"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* 4. Our Solution */}
          <section id="story-solution" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Giải pháp của chúng tôi
            </h2>
            <p className="text-lg font-semibold text-gray-800 mb-4">
              Title: Thịt bò 100% nội địa Việt Nam theo tiêu chuẩn Nhật giao đến
              tận nhà bạn hỉ với ~140k/bữa
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Chúng tôi đã dành vô số thời gian để tìm kiếm và hợp tác với những
              nguồn cung cấp thịt bò tốt nhất được nuôi dưỡng tại Việt Nam 100%,
              chăm sóc theo quy trình chuẩn Nhật Bản. Và chúng tôi tự hào nói rằng
              giờ đây bạn đã có một loại thịt bò không có chất độc hại và tươi ngon
              vô cùng!
            </p>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md mb-6">
              <Image
                src="/images/image7.png"
                alt="Our solution"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* 5. Aging and Preservation Process */}
          <section id="story-preservation" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Quy trình &ldquo;Ủ&rdquo; và bảo quản
            </h2>
            <p className="text-base font-semibold text-gray-800 mb-4">
              Title: Ở nhiệt độ trung bình ở các chợ Việt Nam, cứ mỗi 20 phút số
              lượng vi khuẩn nguy hiểm sẽ tăng gấp đôi
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Sub: Sau 1 giờ, thịt bò đã bắt đầu mất an toàn vệ sinh. Bắt đầu phân
              hủy nhẹ sau 3 giờ và hư rõ rệt sau từ 6–10 giờ. Trong khi đó, nếu được
              bảo quản nghiêm ngặt ở 0–4°C, thời gian giữ tươi có thể kéo dài đến
              3–5 ngày mà vẫn đảm bảo an toàn và dinh dưỡng.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Đó là lý do vì sao các quốc gia như Mỹ và châu Âu từ lâu đã áp dụng
              phương pháp{" "}
              <span className="font-semibold">dry-aging hay wet-aging</span> – hay
              còn gọi là <span className="italic">&ldquo;Ủ&rdquo; thịt bò</span> – trong môi
              trường lạnh 0–2°C. Đây là quá trình cho phép enzyme tự nhiên làm mềm
              thịt và tạo ra hương vị umami đậm đà. Kết hợp với công nghệ{" "}
              <span className="font-semibold">flash freeze</span> –{" "}
              <span className="italic">cấp lạnh siêu tốc ở –40°C</span> – họ có thể
              &ldquo;khóa lại&rdquo; độ tươi ngon ở đỉnh cao nhất, mà không phá vỡ cấu trúc thịt
              hay làm hao hụt dinh dưỡng.
            </p>
            <div
              className="relative w-full rounded-lg overflow-hidden shadow-md mb-6"
              style={{ aspectRatio: "568/380" }}
            >
              <Image
                src="/images/image1.png"
                alt="Aging process"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Tại Việt Nam, những công nghệ này hiếm khi được áp dụng rộng rãi do
              nguồn cung thịt bò còn manh mún, thiếu tính đồng bộ. Nhưng tại{" "}
              <span className="font-semibold">UmamiBox</span>, chúng tôi không chờ
              thị trường thay đổi – chúng tôi tự mình thay đổi.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Chúng tôi ứng dụng trọn vẹn cả hai công nghệ tiên tiến –{" "}
              <span className="italic">&ldquo;Ủ&rdquo; ướt + cấp lạnh siêu tốc</span> – vào từng
              miếng thịt. Kết quả là sản phẩm đạt đến{" "}
              <span className="font-semibold">108% hương vị</span>, với độ mềm, độ
              ngọt và độ tươi mà bạn có thể cảm nhận ngay từ lần đầu nấu thử. Mỗi hộp
              thịt giao đến tay bạn được bảo quản trong{" "}
              <span className="font-semibold">&ldquo;chuỗi lạnh khép kín&rdquo;</span>, giám sát
              bằng cảm biến và trí tuệ nhân tạo để đảm bảo không một phút nào vượt
              ngoài ngưỡng an toàn.
            </p>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md mb-4">
              <Image
                src="/images/image6.png"
                alt="Cold chain process"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              Chúng tôi không phải đơn vị tự nhận thịt bò mình nuôi ngon. Chúng tôi
              hợp tác với các trang trại Việt Nam đạt chuẩn, dùng AI và mạng xã hội
              để chính bạn cùng có thể xem quy trình, chất lượng của từng sản phẩm sẽ
              mua.
            </p>
          </section>

          {/* 6. What's in the Box */}
          <section id="story-box-content" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Trong hộp có gì
            </h2>
            <div
              className="relative w-full rounded-lg overflow-hidden shadow-md mb-6"
              style={{ aspectRatio: "601.7/450.67" }}
            >
              <Image
                src="/images/image4.png"
                alt="Box contents"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Mỗi hộp đều có tuyển chọn kỹ lưỡng các loại thịt bò ăn [có - ngư cực
              cốc]. Ví dụ, một hộp có thể có thịt thăn lưng, sườn non, thịt bò xay và
              thịt thăn lưng. Mỗi hộp có khoảng 15 - 20 phần thịt riêng lẻ, mỗi phần
              từ 200g đến 300g.
            </p>
            <p className="text-lg font-semibold text-gray-800 mb-4">
              Tiêu đề: Chúng tôi cung cấp cho bạn các công thức và cách cắt để nấu ăn
              như một đầu bếp chuyên nghiệp
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Chúng tôi đã chọn những loại thịt phổ biến mà chúng tôi biết bạn sẽ
              thích nấu, cũng như một số món ưa thích của chúng tôi. Bạn cũng sẽ
              thích các thẻ công thức nấu ăn từng bước của chúng tôi, cung cấp mọi
              thứ bạn cần để có một bữa ăn hoàn hảo.
            </p>
            <p className="text-lg font-semibold text-gray-800 mb-4">
              Tiêu đề: Hãy nghĩ chúng tôi là chợ bán thịt trong xóm cho gia đình Việt
              Nam hiện đại
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Mục tiêu của chúng tôi là giúp thịt bò nội địa 100% dễ tiếp cận hơn bao
              giờ hết
            </p>
          </section>

          {/* 7. Community Support */}
          <section id="story-support" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Sự ủng hộ của bạn sẽ cho phép chúng tôi cung cấp nhiều loại thịt hơn
              (thịt lợn, hải sản, thịt gà, …) và lan rộng phong trào &ldquo;thịt từ quê&rdquo;
              trên khắp Việt Nam.
            </h2>
            <p className="text-base text-gray-700 mb-4">1 tháng</p>
            <p className="text-base text-gray-700 mb-4">1 tháng - 2 hộp</p>
            <p className="text-base text-gray-700 mb-4">3 tháng (ưu đãi)</p>
            <p className="text-base text-gray-700 mb-4">6 tháng (ưu đãi)</p>
            <p className="text-base text-gray-700 mb-4">1 năm (ưu đãi)</p>
            <p className="text-base text-gray-700 mb-6">
              1 năm + tiệc BBQ tại gia
            </p>
            <p className="text-lg font-semibold text-gray-800">
              CHỌN PHẦN THƯỞNG CỦA BẠN Ở PHÍA BÊN PHẢI CỦA TRANG!
            </p>
          </section>

          {/* 8. Stretch Goals */}
          <section id="story-goals" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              mục tiêu mở rộng
            </h2>
            <p className="text-base text-gray-700 mb-4">Gà & Heo</p>
            <p className="text-base text-gray-700 mb-4 font-semibold">500 triệu</p>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Tại cột mốc này, bạn có thể chọn nâng cấp hộp của bạn thành &ldquo;Mixed Box&rdquo;
              với 100% bò, gà thả đồng cùng với 100% heo hữu cơ.
            </p>
            <p className="text-base text-gray-700 mb-4 font-semibold">1 tỷ</p>
            <p className="text-base text-gray-700">Free ba chỉ xông khói</p>
          </section>

          {/* 9. Team Introduction */}
          <section id="story-team" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Giới thiệu đội ngũ
            </h2>
            <p className="text-base text-gray-700 mb-4">
              (1 ảnh) 1 Tên - vị trí - giới thiệu
            </p>
          </section>

          {/* 10. Timeline */}
          <section id="story-timeline" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Timeline</h2>
            <p className="text-base text-gray-700 mb-2">
              Chiến dịch đặt bán trước bắt đầu 15/11/2025
            </p>
            <p className="text-base text-gray-700 mb-2">
              Chiến dịch đặt bán trước kết thúc 15/12/2025
            </p>
            <p className="text-base text-gray-700">
              Ước tính giao hàng tháng 1/2026
            </p>
          </section>

          {/* 11-13. FAQ and Other Sections */}
          <section id="story-faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </section>

          <section id="story-other-questions" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Other Questions?
            </h2>
          </section>

          <section id="story-challenges" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Thách thức.
            </h2>
          </section>
        </div>
      </div>
    </section>
  );
}
