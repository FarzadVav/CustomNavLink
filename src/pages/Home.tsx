import { useContext, useEffect } from 'react'
import LoadingContext from '../contexts/LoadingContext'

const Home = () => {
  const loading = useContext(LoadingContext)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(() => {
        // codes...
      })
      .catch(() => {
        // codes...
      })
      .finally(() => loading.setPageLoadingHandler(false))
  }, [])

  return (
    <div>
      <h3>
        Home page
      </h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates soluta, ex ipsam veritatis eius consequatur quis facere animi ipsum quibusdam, iste, accusamus laudantium asperiores molestias officiis ut voluptate! Voluptates corporis, error dolorem assumenda ullam ipsum commodi quisquam nemo dolor earum vero quidem quos voluptatem sapiente nam aspernatur. Facilis quis id similique dolor inventore ducimus perferendis dolorum nobis magni earum, harum qui neque provident consectetur. Quia iste beatae velit dolore deserunt, suscipit repudiandae minima architecto dolorum et accusantium quis ipsum molestias impedit similique sequi nihil totam fuga quas optio consectetur quibusdam enim? Doloremque iure expedita ipsam deleniti totam suscipit aperiam consectetur assumenda vitae blanditiis, ut quis, consequuntur dignissimos? A, explicabo laudantium incidunt facere ut modi consequuntur commodi quidem repellat veritatis totam expedita. Itaque, distinctio recusandae. Rem ut at enim incidunt voluptatibus corrupti consequatur perferendis tenetur esse qui deserunt aliquam accusamus nulla cupiditate, magnam laborum. Iure assumenda, libero quibusdam mollitia corporis dolores placeat quia magnam quam iste quasi nam, non autem accusantium similique illum dolorum! Iure, nobis inventore similique dolores dignissimos amet porro voluptatum, facere delectus praesentium atque rem dicta veritatis sit animi alias at laudantium ut architecto. Eaque enim laboriosam quod qui ratione modi nam placeat iure, quae quos aspernatur, corporis voluptas unde harum in veritatis distinctio dignissimos nobis dolor nulla iusto exercitationem nihil provident. Natus voluptatibus commodi eos facere recusandae voluptatum earum quisquam quo. Sed sit accusantium adipisci ipsa nostrum quis eum corrupti voluptates facere esse ipsam commodi amet laborum nesciunt qui, illo itaque debitis veniam quos totam laudantium voluptatem dolorem quo quidem. Quibusdam dolorum natus necessitatibus, provident impedit aspernatur veniam repudiandae velit, blanditiis ipsum sed neque vero dignissimos adipisci! Quaerat magni atque, facilis iure dicta, architecto ut aliquid commodi rerum quis iusto impedit illo quibusdam. Minima optio temporibus, doloremque, facilis mollitia quia vitae repellendus atque culpa vel voluptates eius, voluptate magni beatae harum veniam quam consequuntur facere similique numquam reprehenderit qui? Rem iusto numquam aut, error libero officia sit dignissimos illo quo unde esse beatae quae id natus, tempore maiores dolor autem necessitatibus. Numquam aperiam aut veritatis corporis recusandae quasi omnis iusto nostrum labore voluptate voluptatem tempore qui, eum sunt, eaque vitae rem neque molestias, natus fugit provident vero! Labore dolorum commodi assumenda deserunt iste aliquam? Cumque laboriosam animi necessitatibus corrupti ex atque rem reiciendis, ea facilis enim assumenda placeat quibusdam deserunt suscipit earum neque ullam illum praesentium vitae qui dolore nihil quaerat! Facilis quasi repellat commodi esse eum ducimus repellendus quo alias harum ipsa, quae, consectetur molestiae! Dolorem aspernatur animi velit itaque et voluptate dignissimos, amet sapiente adipisci saepe nisi, distinctio vero tempore sit, dolorum perspiciatis totam labore consectetur. Vitae, eveniet eos. Minima rerum doloribus aperiam officiis ullam rem quae eligendi soluta suscipit repudiandae sed, quibusdam molestias atque nostrum? Aspernatur dolorum velit facere nostrum architecto nobis iure, maxime corrupti, earum magnam quidem accusamus, ratione id saepe perspiciatis error. Ad magni nemo exercitationem eos amet voluptatibus repellat dolorem vitae sint est. Explicabo, corrupti animi harum amet eum obcaecati vitae expedita deleniti autem, exercitationem dolore illo accusamus? Consequuntur maxime, quo laudantium repellat temporibus voluptas earum sed in dignissimos. Corrupti, adipisci vel ex beatae esse voluptate dicta eum hic sit nobis, non ab libero, odit quos voluptatum dolores debitis! Autem reiciendis labore omnis ea voluptatum. Reiciendis ad enim labore dolores eius! Reprehenderit ad provident explicabo repudiandae dolor consectetur cupiditate asperiores voluptas hic dolores eaque autem praesentium vero quidem ipsum, doloremque sunt quasi numquam. Aliquid at fuga voluptatum, dolorum laboriosam a provident dicta cumque eum velit explicabo illum delectus placeat repudiandae veritatis dignissimos ipsum vero nam sapiente quaerat? Dolorem, nesciunt iure laudantium, magnam non sit minima nostrum, tempora quibusdam illum ea sunt. Omnis repudiandae, ea asperiores minus voluptates veritatis aliquam consequatur voluptatum ab optio. Est deserunt sed minus nostrum perspiciatis ipsum provident animi praesentium, expedita voluptatum accusamus odit earum adipisci modi reprehenderit laboriosam incidunt sit veritatis repellat necessitatibus obcaecati unde? Iure dolorem corrupti possimus voluptate ab exercitationem quos. Voluptates repudiandae ab, ea repellendus tempore cum eligendi dolores veniam mollitia error at minima perspiciatis aperiam recusandae perferendis voluptatem fugit? Consequatur odio vel dolorum placeat doloremque sint architecto numquam eum repudiandae, amet in facilis odit quasi accusamus dolor ducimus tempore ipsam! Voluptatem reprehenderit, adipisci aut, quibusdam alias iste ex quam error, autem placeat soluta. Error a amet harum minus recusandae, sunt optio. Expedita, laborum? Laborum autem dignissimos dolore. Sint sapiente aspernatur laborum recusandae nisi necessitatibus molestiae nesciunt eius aut facilis! Nisi saepe molestiae earum sit aliquid nam magnam similique corporis. Modi consectetur deleniti cum quidem voluptas et nisi earum esse harum debitis dignissimos fugit expedita atque suscipit, consequatur pariatur id ex quis sit alias. Commodi quos, quis architecto pariatur sint mollitia, possimus eum cum non incidunt temporibus aut quod repudiandae ducimus at libero expedita eaque iste laboriosam consectetur. Eaque corrupti maxime repudiandae, voluptatum animi maiores fugiat sit, tenetur dolores, suscipit omnis ipsum aliquid incidunt. Beatae in sed provident doloribus eum error cupiditate exercitationem animi, quibusdam, quaerat adipisci tempora non, sapiente atque ex et laudantium libero expedita ipsum minus a labore id. Facere totam consectetur perferendis, delectus nostrum placeat ut ipsum obcaecati laudantium, ratione consequuntur nemo dolorem dicta blanditiis nulla, amet eveniet! Sint saepe aperiam natus repellat unde et officiis qui culpa, animi impedit inventore officia tenetur debitis quisquam magni reprehenderit laborum explicabo! Hic vel assumenda quidem exercitationem, ex, pariatur tempore tempora, provident commodi possimus consequatur ipsa magni! Doloribus possimus ipsam aliquid similique iste nam optio hic assumenda cumque harum id suscipit pariatur, quaerat soluta eveniet earum asperiores quam consequuntur fuga libero obcaecati! Veritatis quae, iusto voluptas labore libero nemo mollitia. At facere, unde nulla nobis nihil vitae cumque incidunt perferendis necessitatibus dolores consectetur, minima error minus quam aliquid aliquam? Laudantium reprehenderit earum repellat ad cumque odio voluptate, fuga cum ex omnis soluta veniam ducimus officiis aliquam aliquid perferendis voluptas! Officia, inventore ut ipsum nemo quis, aliquid officiis ipsa natus culpa modi corrupti odio vel debitis animi saepe eum alias perferendis voluptatibus. Reiciendis exercitationem ullam, minima debitis velit id et repudiandae tempore beatae non omnis similique cum, culpa saepe illo cupiditate hic. Dignissimos, provident aliquid?
      </p>
    </div>
  )
}

export default Home