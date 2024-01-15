const CategoryLayout = ({ children }: { children: React.ReactNode }) => {
  //TODO: Make h1 title dynamic
  
  return (
    <main className='mt-20'>
      <h1 className='font-header text-xl font-semibold uppercase md:text-2xl'>
        Category
      </h1>
      {children}
    </main>
  )
}

export default CategoryLayout
