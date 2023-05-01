class Tag < ApplicationRecord
	belongs_to :list

  def self.search_for(content)
    Tag.where(name: content)
  end

end
